# rule-node-examples-ui-ngx

Configuration UI for Custom Rule Nodes from rule-node-examples ThingsBoard repository

## Build steps

1) Cleanup
    ```
    npm run cleanup 
    ```
2) Get ThingsBoard UI dependency
    ```
    npm run getthingsboard 
    ```
3) Install dependencies
    ```
    npm install 
    ```
4) Production build    
    ```
    npm run build 
    ```
    Resulting JavaScript should be here:
    ```
    ./target/generated-resources/public/static/custom-nodes-config.js
    ```
5) Deploy Rule Nodes UI JavaScript code to to rule-node-examples

    Resulting **custom-nodes-config.js**
    should be copied to ```rule-node-examples/src/main/resources/public/static/rulenode/```
    directory of rule-node-examples repository.
