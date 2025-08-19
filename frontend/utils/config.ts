import { useSetupConfigStore } from '$/stores/useSetupConfigStore';

export default <Path extends string | undefined = undefined>(
	key?: Path,
	defaultValue?: Path extends string
        ? ValueOf<SetupConfig, Split<Path>>
        : undefined,
): ConfigValue<Path> => useSetupConfigStore().config(key, defaultValue);
