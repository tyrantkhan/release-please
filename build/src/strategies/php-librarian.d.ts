import { PHPYoshi } from './php-yoshi';
import { BuildUpdatesOptions } from './base';
import { Update } from '../update';
export declare class PHPLibrarian extends PHPYoshi {
    protected buildUpdates(options: BuildUpdatesOptions): Promise<Update[]>;
}
