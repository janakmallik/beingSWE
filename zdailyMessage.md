PS C:\Users\Janak Mallik\Documents\GitHub\beingSWE\typeScript\03pureTs> npm audit
>>
# npm audit report

axios  0.8.1 - 0.27.2
Severity: moderate
Axios Cross-Site Request Forgery Vulnerability - https://github.com/advisories/GHSA-wf5p-g6vw-rhxx
No fix available
node_modules/axios
  localtunnel  >=1.9.0
  Depends on vulnerable versions of axios
  node_modules/localtunnel
    browser-sync  2.24.0-rc1 - 3.0.0-alpha.2
    Depends on vulnerable versions of localtunnel
    node_modules/browser-sync
      lite-server  *
      Depends on vulnerable versions of browser-sync
      node_modules/lite-server


4 vulnerabilities (3 moderate, 1 high)

Some issues need review, and may require choosing
a different dependency.