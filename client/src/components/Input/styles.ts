export const outlinedVariant = (hasError: boolean) =>
  `flex-1 py-2 border-b-2 ${
    hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-gray-400 focus:border-green-400'
  } transition-colors duration-300 text-xl text-slate-200 placeholder-gray-400 outline-none bg-transparent w-full`;

export const defaultVariant = (hasError: boolean) => '';

export const labelClass = (hasError: boolean) =>
  `${hasError ? 'text-red-400' : 'text-slate-400'} text-xs`;
