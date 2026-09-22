import { RubyYoshi } from './ruby-yoshi';
import { BuildUpdatesOptions } from './base';
import { Update } from '../update';
export declare class RubyLibrarian extends RubyYoshi {
    protected buildUpdates(options: BuildUpdatesOptions): Promise<Update[]>;
}
