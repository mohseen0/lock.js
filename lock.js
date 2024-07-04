// Disable right click
function disableRightClick(e) {
    e.preventDefault();
}
document.addEventListener("contextmenu", disableRightClick, false);

// Disable text selection and copy-paste
function killCopy(e) {
    e.preventDefault();
}

function reEnable() {
    return true;
}

document.onselectstart = function() {
    return false;
};

document.onmousedown = function(e) {
    if (e.detail > 1) {
        e.preventDefault();
    }
};

document.addEventListener("copy", killCopy);
document.addEventListener("cut", killCopy);
document.addEventListener("paste", killCopy);

// Disable specific key combinations for Ctrl, Meta, and Shift
function disableKeyCombinations(e) {
    if ((e.ctrlKey || e.metaKey) && (
            e.key === 'c' || 
            e.key === 'v' || 
            e.key === 'u' || 
            e.key === 'p' ||
            e.key === 's' ||
            e.key === 'i' || 
            e.key === 'F12')) {
        alert("Website Protected");
        e.preventDefault();
    }

    if (e.shiftKey && (
            e.code === 'Insert' || // Shift + Insert
            e.code === 'Delete' || // Shift + Delete
            e.key === 'S' || 
            e.key === 'T' ||
            e.key === 'C' ||
            e.key === 'I')) {
        alert("Website Protected");
        e.preventDefault();
    }
}

document.addEventListener("keydown", disableKeyCombinations);

// Prevent drag and drop
function disableDrag(e) {
    alert("Website Protected");
    e.preventDefault();
}
window.addEventListener('dragstart', disableDrag);

// Disable right click for images
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
        alert("Website Protected");
        e.preventDefault();
    });
});

// Function to remove all protections
function removeAllProtections() {
    alert("Protections Unlocked");

    // Remove right click protection
    document.removeEventListener("contextmenu", disableRightClick, false);

    // Re-enable text selection and copy-paste
    document.onselectstart = null;
    document.onmousedown = null;
    document.removeEventListener("copy", killCopy);
    document.removeEventListener("cut", killCopy);
    document.removeEventListener("paste", killCopy);

    // Remove key combination protections
    document.removeEventListener("keydown", disableKeyCombinations);

    // Allow drag and drop
    window.removeEventListener('dragstart', disableDrag);

    // Allow right click for images
    document.querySelectorAll('img').forEach(function(img) {
        img.removeEventListener('contextmenu', disableRightClick);
    });
}

// Secret key combinations to unlock all protections
document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey && e.shiftKey && e.key === 'M') || 
        (e.ctrlKey && e.shiftKey && e.key === 'F8') ||
        (e.metaKey && e.shiftKey && e.key === 'M') ||
        (e.metaKey && e.shiftKey && e.key === 'F8')) {
        removeAllProtections();
    }
});
