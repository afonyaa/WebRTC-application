export const classes = {
  container: 'flex justify-between relative mb-8',
  progressBars: 'w-full absolute h-1 inset-0 my-auto flex z-0',
  progressDotWrapper: (current: boolean, indicated: boolean) =>
    `h-6 w-6 sm:h-12 sm:w-12 ${current && 'border-2 border-emerald-800'}  ${
      indicated ? 'bg-emerald-400' : 'bg-slate-400'
    }  rounded-full z-10 relative text-slate-100 flex justify-center items-center transition-colors duration-150 ease-in `,
  progressDotLabelWrapper:
    'absolute top-full text-slate-200 text-center text-xs mt-2',
  progressBar: (indicated: boolean) =>
    `h1 w-full ${
      indicated ? 'bg-emerald-800' : 'bg-slate-700'
    } transition-colors duration-150 ease-in`,
};
