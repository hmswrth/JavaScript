let assetArray = [];
function addAsset() {
    let assetId = document.getElementById('asset_id').value;

    let type = document.getElementById('type').value;
    let supplier = document.getElementById('supplier').value;
    let manufacturer = document.getElementById('manufacturer').value;
    let Asset = {
        'assetId': assetId,
        'type': type,
        'supplier': supplier,
        'manufacturer': manufacturer
    };
    assetArray.push(Asset);
    document.getElementById('asset_id').value = '';
    document.getElementById('type').value = '';
    document.getElementById('supplier').value = '';
    document.getElementById('manufacturer').value = '';
}
let tableData = '<tr><th>Asset Type</th><th>Quantity</th></tr>';

function displayAsset() {
    let result = {};
    for (let i = 0; i < assetArray.length; i++) {
        if (assetArray[i].type in result) {
            result[assetArray[i].type] += 1;
        } else {
            result[assetArray[i].type] = 1;
        }
    }
    let elements = Object.keys(result);
    for (let i = 0; i < elements.length; i++) {
        tableData = tableData + '<tr><td>' + elements[i] + '</td><td>' + result[elements[i]] + '</td></tr>';
    }
    document.getElementById('tab').innerHTML = tableData;
}