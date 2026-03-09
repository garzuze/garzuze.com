import { Button } from '@/components/ui/button';
import { Project } from '../types/Project';
import { X } from 'lucide-react';

interface ProjectModal {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ServiceModal = ({ isOpen, onClose, project }: ProjectModal) => {
  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop with fade-in animation */}
      <div
        className={`fixed inset-0 bg-black/90 bg-opacity-50 z-99 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal container with slide-in animation */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className={`bg-white dark:bg-black border border-stone-200 dark:border-stone-900 shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200 dark:border-stone-900">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal content */}
          <div className="p-6">
            {project.fullDescription.split('\n').map((line, id) => (
              <p className="mb-6 leading-relaxed" key={id}>
                {line}
              </p>
            ))}

            {project.bullets && (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  {project.bulletsTitle}
                </h3>
                <ul className="space-y-3">
                  {project.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-700 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Modal footer */}
          <div className="flex justify-end p-6 border-t border-stone-200 dark:border-stone-900">
            <Button className="cursor-pointer" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceModal;
