import { EnvVarsType, envVars } from '@/constants/envVars';

export const getEnv = (variable: EnvVarsType) => envVars[variable];
