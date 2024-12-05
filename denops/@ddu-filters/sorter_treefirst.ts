import { DduFilterItems } from "jsr:@shougo/ddu-vim@9.0.1/types";
import { BaseFilter, FilterArguments } from "jsr:@shougo/ddu-vim@9.0.1/filter";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(
    args: FilterArguments<Params>,
  ): DduFilterItems {
    return args.items.toSorted((a, b) =>
      a.isTree && !b.isTree ? -1 : !a.isTree && b.isTree ? 1 : 0
    );
  }

  override params(): Params {
    return {};
  }
}
