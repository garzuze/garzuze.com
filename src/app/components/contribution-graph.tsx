import { Suspense } from 'react';
import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from '@/app/data/github';
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from '@/components/github-contributions';
import { getCachedContributions } from '@/lib/get-cached-contributions';
import { cn } from '@/lib/utils';

const ContributionGraph = () => {
  const contributions = getCachedContributions(GITHUB_USERNAME);

  return (
    <section
      data-slot="panel"
      className="border-stone-200 dark:border-stone-900 border-x border-edge"
    >
      <div data-slot="panel-body" className="py-2 space-y-2">
        <Suspense fallback={<GitHubContributionsFallback />}>
          <GitHubContributions
            contributions={contributions}
            githubProfileUrl={GITHUB_PROFILE_URL}
            className={cn(
              '**:data-[level="0"]:fill-[#eff2f5] dark:**:data-[level="0"]:fill-[#151b23]',
              '**:data-[level="1"]:fill-[#b6e3ff] dark:**:data-[level="1"]:fill-[#0c2d6b]',
              '**:data-[level="2"]:fill-[#54aeff] dark:**:data-[level="2"]:fill-[#1158c7]',
              '**:data-[level="3"]:fill-[#0969da] dark:**:data-[level="3"]:fill-[#58a6ff]',
              '**:data-[level="4"]:fill-[#0a3069] dark:**:data-[level="4"]:fill-[#cae8ff]',
            )}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default ContributionGraph;
