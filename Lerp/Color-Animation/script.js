// 1. Define our Start and End Colors
const startColor = {r: 255, g: 0, b: 0}; //Pure Red
const endColor = {r: 0, g: 150, b: 255}; //Sky Blue

// 2. The Lerp Function
const lerp = (start, end, t) => {
    return start + (end - start) * t;
}

const clamp = (current, minimum, maximum) => {
    if(current > maximum){
        return maximum;
    }
    else if(current < minimum){
        return minimum;
    }
    else {
        return current;
    }
}

window.addEventListener('scroll', () => {
    // 3. Calculate 't' (0 to 1) based on scroll position
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // This ensures t is always between 0 to 1
    // const t = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    const t = clamp(scrollTop / maxScroll, 0, 1);


    // 4. Calculate the new RGB values using lerp
    const r = (lerp(startColor.r, endColor.r, t))
    const g = (lerp(startColor.g, endColor.g, t))
    const b = (lerp(startColor.b, endColor.b, t))

    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;

    document.getElementById('scroll-text').innerText = `${Math.round(t * 100)}%`;
});