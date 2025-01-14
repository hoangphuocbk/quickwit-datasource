import { DataSourceSettings } from '@grafana/data';
import { QuickwitOptions } from 'quickwit';

export const coerceOptions = (
  options: DataSourceSettings<QuickwitOptions, {}>
): DataSourceSettings<QuickwitOptions, {}> => {
  return {
    ...options,
    jsonData: {
      ...options.jsonData,
      timeField: options.jsonData.timeField || 'timestamp',
      logMessageField: options.jsonData.logMessageField || '',
      logLevelField: options.jsonData.logLevelField || '',
    },
  };
};
