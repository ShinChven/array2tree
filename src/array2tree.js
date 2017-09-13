module.exports = function (rootId,arr) {
    
    /**
     * start with root id
     */
    var treeArr = findChildren(rootId);
    
    /**
     * please notice!
     * not all items will be added to the tree, due to random parentId.
     * only good relation will be added to the tree.
     * @param {*} parentId 
     */
    function findChildren(parentId) {
        var treeArr = [];
        for (var i = 0; i < arr.length;) {
            var item = arr[i];
            if (item.parentId == parentId) {
                treeArr.push(item);
                // remove if parentId matched with item parentId.
                arr.splice(i, 1);
            } else {
                // move forward if parentId mismatched with item parentId.
                i++;
            }
        }
    
        // find children recursively
        for (var index in treeArr) {
            var parent = treeArr[index];
            parent['children'] = findChildren(parent['id']);
        }
        return treeArr;
    }
    
    
    // output result to file
    var result = JSON.stringify(treeArr, null, 2);

    return result;
};