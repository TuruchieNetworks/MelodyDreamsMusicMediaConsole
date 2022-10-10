import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type MelodyDreamsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MelodyDreams {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly password2: string;
  readonly image?: string | null;
  readonly tracks?: string | null;
  readonly follow?: boolean | null;
  readonly followers?: number | null;
  readonly like?: boolean | null;
  readonly likes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MelodyDreams, MelodyDreamsMetaData>);
  static copyOf(source: MelodyDreams, mutator: (draft: MutableModel<MelodyDreams, MelodyDreamsMetaData>) => MutableModel<MelodyDreams, MelodyDreamsMetaData> | void): MelodyDreams;
}