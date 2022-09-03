import { FC } from 'react';
import { ProgressDottedProps } from '@components/ProgressDotted/interfaces';
import { classes } from './styles';
export const ProgressDotted: FC<ProgressDottedProps> = ({
  progressItems,
  activeItemIdx,
}) => {
  const progressBarsTotalCount = progressItems.length - 1;
  const progressBarsActiveCount = activeItemIdx;

  return (
    <div className={classes.container}>
      <div className={classes.progressBars}>
        {[...Array(progressBarsTotalCount)].map((_, idx) => (
          <div
            key={idx}
            className={classes.progressBar(idx < progressBarsActiveCount)}
          />
        ))}
      </div>
      {progressItems.map((item, idx) => (
        <div
          key={idx}
          className={classes.progressDotWrapper(
            idx === activeItemIdx,
            idx < activeItemIdx
          )}
        >
          {++idx}
          <div className={classes.progressDotLabelWrapper}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};
