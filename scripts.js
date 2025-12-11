//document.querySelectorAll('.tab').forEach(tab => {
//  tab.addEventListener('click', function() {
//    // Remove active from all tabs
//    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
//    // Remove active from all content
//    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
//
//    // Add active to clicked tab
//    this.classList.add('active');
//    // Show the selected tab's content
//    document.getElementById(this.getAttribute('data-tab')).classList.add('active');
//  });
//});
// Initialize first tab on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set tab1 as active by default
    const firstTab = document.querySelector('[data-tab="tab1"]');
    const firstContent = document.getElementById('tab1');

    if (firstTab && firstContent) {
        firstTab.classList.add('active');
        firstContent.classList.add('active');
    }
});

// Handle tab clicks
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

        // Remove active from all content
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active to clicked tab
        this.classList.add('active');

        // Show the selected tab's content
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});
