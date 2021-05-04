var max = 0;
    
    function maxElem(arr){
        
        for( var i = 0; i < arr.length; i++ ){
            
            if(arr[i].clientHeight > max ){
                max = arr[i].clientHeight;
            }
        }
        
        return max;
    }
    
function correctSliderHeight() {
        
        var brPoint = document.body.clientWidth;
        var slider = document.getElementById('slider');
        var parentBlock = document.querySelector('.central-block');
        var parentBlockInner = parentBlock.firstElementChild;
        var parentBlockMinHeight = 947;
        var sliderMinHeight = 643;
        var slideStandartHeight = 167;
        var slides = slider.children;
        
        
        if ( brPoint < 992 ) {
            parentBlock.style.height = '';
            parentBlockInner.style.height = '';
            slider.style.height = '';
            return;
        }
        
        
        
        var highestSlide = maxElem(slides);
        var diff = (highestSlide - slideStandartHeight) * 2;
        console.log(diff);
        parentBlock.style.height = parentBlockMinHeight + diff + 'px';
        console.log(parentBlock.style.height);
        parentBlockInner.style.height = parentBlockMinHeight + diff - 64 + 'px';
        slider.style.height = sliderMinHeight + diff + 'px';
        
    }
    

document.addEventListener('DOMContentLoaded', correctSliderHeight);
window.onresize = correctSliderHeight;