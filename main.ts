
import { writeFileSync } from 'node:fs';
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TEXT = "Republic of Elsewhere. Passport No. 000-000. Holder: any reader, between tasks. Issued: the moment you look up. Valid: wherever your attention lands. Visa granted: ten minutes of doing nothing, border-free.";
writeFileSync(dir + '/entry.txt', TEXT);
