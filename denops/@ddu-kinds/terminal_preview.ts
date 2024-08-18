import {
  BaseKind,
  DduItem,
  DduOptions,
  type Denops,
  PreviewContext,
  Previewer,
} from "jsr:@shougo/ddu-vim@~5.0.0/types";

type Params = Record<never, never>;

export class Kind extends BaseKind<Params> {
  override actions = {};

  override async getPreviewer(args: {
    denops: Denops;
    item: DduItem;
    actionParams: unknown;
    previewContext: PreviewContext;
  }): Promise<Previewer | undefined> {
    return {
      kind: "terminal",
      cmds: [
        "printf",
        String.raw`\033[31m%s\033[32m%s\033[34m%s\033[m\n`,
        "RED",
        "GREEN",
        "BLUE",
      ],
    };
  }

  override params(): Params {
    return {};
  }
}
