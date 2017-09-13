/**
 * created by ShinChven
 * Build a tree from array, starting with items that contains the rootId.
 * If a item can not trace its parent, or its parent's parent and on, back to the root, it and its children will not be added to the tree.
 * @param {*int} rootId
 * @param {*array} arr 
 */
var array2tree = function (rootId, arr) {

    /**
     * start with root id
     */
    var treeArr = findChildren(rootId);

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

module.exports = array2tree;