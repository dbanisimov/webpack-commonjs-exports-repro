## Steps to reproduce
```
npm ci
npm run build
npm run test
```

## Expected output
Both library bundles should produce the same exports with the default property:
```
{ lib: Object [Module] { default: [Getter] } }
{ libNoPrefetch: Object [Module] { default: [Getter] } }
```

## Actual output
Library bundled with prefetch hints produces undefined exports
```
{ lib: undefined }
{ libNoPrefetch: Object [Module] { default: [Getter] } }
```

