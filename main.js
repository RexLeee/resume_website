document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);
            if (targetContent) {
                // Hide all content sections
                var contentSections = document.querySelectorAll('.content-section');
                contentSections.forEach(function(section) {
                    section.style.display = 'none';
                });

                // Display the target content section
                targetContent.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 隱藏所有內容區塊
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // 顯示自我介紹內容區塊
    var selfIntroductionContent = document.getElementById('self-introduction-content');
    selfIntroductionContent.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    // 隱藏所有內容區塊
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // 顯示自我介紹內容區塊
    var selfIntroductionContent = document.getElementById('self-introduction-content');
    selfIntroductionContent.style.display = 'block';

    // 獲取 Max Lee 連結
    var maxLeeLink = document.querySelector('.main-page .nav-link');
    
    // 點擊 Max Lee 連結時的事件處理
    maxLeeLink.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默認行為
        // 隱藏所有內容區塊
        contentSections.forEach(function(section) {
            section.style.display = 'none';
        });
        // 顯示自我介紹內容區塊
        selfIntroductionContent.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menu-btn');
    var menuLinks = document.getElementById('menu-links');
    
    menuBtn.addEventListener('click', function() {
        if (menuLinks.classList.contains('active')) {
            menuLinks.classList.remove('active');
        } else {
            menuLinks.classList.add('active');
        }
    });

    var navLinks = document.querySelectorAll('.menu-links .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            menuLinks.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var projectLink = document.querySelector('[href="#project"]');
    var projectDropdown = document.getElementById('project-dropdown');
    
    projectLink.addEventListener('mouseenter', function() {
        projectDropdown.style.display = 'block';
    });

    projectLink.addEventListener('mouseleave', function(){
        projectDropdown.style.display = 'none'
    })

    projectDropdown.addEventListener('mouseenter', function() {
        projectDropdown.style.display = 'block';
    });

    projectDropdown.addEventListener('mouseleave', function() {
        projectDropdown.style.display = 'none';
    });


});
    



