# Test NPM/pnpm Vulnerable Project

This is a test project with known vulnerabilities for Veracode SCA scanning.

## Vulnerable Dependencies

- **axios@0.18.0** - Proxy Bypass vulnerability (CVE-2021-41773)
- **lodash@4.17.11** - Prototype Pollution (CVE-2021-23337)
- **minimist@1.2.0** - Prototype Pollution (CVE-2021-44906)
- **express@4.16.2** - Multiple vulnerabilities

## Scanning with Veracode

To scan this project with Veracode SCA:

```bash
# Using srcclr
srcclr scan .

# Or with specific options
srcclr scan . --json output.json
```

## Vulnerable Methods

This project is designed to demonstrate vulnerable method detection:

1. `makeRequestWithAxios()` - Uses vulnerable axios for HTTP requests
2. `mergeConfig()` - Uses vulnerable lodash for object merging
3. `parseArgs()` - Uses vulnerable minimist for argument parsing
