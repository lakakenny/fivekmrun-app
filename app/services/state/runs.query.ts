import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { RunsState, RunsStore } from "./runs.store";

@Injectable({ providedIn: "root" })
export class RunsQuery extends QueryEntity<RunsState> {

  constructor(protected store: RunsStore) {
    super(store);
  }

}
