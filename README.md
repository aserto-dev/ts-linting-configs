# Aserto shared Type-check/Lint/Format configs

## Testing changes locally

To quickly check that configs are valid, don't have syntax errors, etc. run the checks on this repo.

### Type-checking
```yarn tsc```

### Linting and Formatting
```yarn lint```

## Testing changes in another repo

Since most of the checks don't apply to anything in this repo, you should test that your changes had the intended effect in one that can exercise your changes.

In your local checkout of this repo, run:

```yarn link```

In the repo that you want to test the changes in, run:

```yarn link @aserto/ts-linting-configs```

This has the effect of making your `node_modules/@aserto/ts-linting-configs` symlink to your local `ts-linting-configs` checkout directory.

Now run whatever commands you use to invoke the TypeScript compiler and ESLint in your designated repo and check for the desired behavior.

To unlink your other repo from `ts-linting-configs`, run:

```yarn unlink @aserto/ts-linting-configs```

(Optionally) You can unregister this repo from being linked to by running:

```yarn unlink```
