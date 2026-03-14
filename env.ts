import type { EnvOptions } from "tnp/src";

const env: Partial<EnvOptions> = {
  website: {
    domain: "my-awesome-cli-tool.example.domain.com",
    title: "My Awesome Cli Tool",
    useDomain: true,
  },
  loading: {
    preAngularBootstrap: {
      background: "#fdebed",
      loader: { name: "lds-default" },
    },
  },
};
export default env;
