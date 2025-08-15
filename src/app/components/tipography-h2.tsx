export function TypographyH2({ children, ...props }: React.ComponentProps<'h2'>) {
   return (
       <h2 
           className="scroll-m-20 border-b border-stone-200 dark:border-stone-900 pb-2 text-3xl font-semibold tracking-tight first:mt-0" 
           {...props}
       >
           {children}
       </h2>
   )
}