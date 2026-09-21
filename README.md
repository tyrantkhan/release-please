# automation

This branch exists so the `Sync with upstream` workflow can run on a schedule.
It is the fork's default branch for that reason only. `main` mirrors
googleapis/release-please, and `feat/pull-request-group` carries
googleapis/release-please#2904.

Every upstream release from 17.11.2 on gets a patched counterpart tag
`vX.Y.Z-pr2904.N` with the CLI bundle attached to its release; drop the suffix
to move back to plain upstream.
