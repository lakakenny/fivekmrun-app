import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Run } from "../../models";

export interface RunsState extends EntityState<Run, string> {

}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "runs" })
export class RunsStore extends EntityStore<RunsState> {

  constructor() {
    super();
  }

}

