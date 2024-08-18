import {
  BaseSource,
  DduActionData,
  DduOptions,
  type Denops,
  Item,
  SourceOptions,
} from "jsr:@shougo/ddu-vim@~5.0.0/types";

type Params = Record<never, never>;

export class Source extends BaseSource<Params> {
  override kind = "terminal_preview";

  override gather(args: {
    denops: Denops;
    options: DduOptions;
    sourceOptions: SourceOptions;
    sourceParams: Params;
    input: string;
  }): ReadableStream<Item<DduActionData>[]> {
    return new ReadableStream({
      async start(controller) {
        const items = [
          "dummy-1",
          "dummy-2",
          "dummy-3",
          "dummy-4",
        ].map((item) => {
          return {word: item};
        });
        controller.enqueue(items);

        controller.close();
      },
    });
  }

  override params(): Params {
    return {};
  }
}
