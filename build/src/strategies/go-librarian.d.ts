import { BaseStrategy, BuildUpdatesOptions, BaseStrategyOptions } from './base';
import { Update } from '../update';
import { Version } from '../version';
export declare class GoLibrarian extends BaseStrategy {
    readonly versionFile: string;
    constructor(options: BaseStrategyOptions);
    getComponent(): Promise<string | undefined>;
    getBranchComponent(): Promise<string | undefined>;
    protected buildUpdates(options: BuildUpdatesOptions): Promise<Update[]>;
    protected initialReleaseVersion(): Version;
}
