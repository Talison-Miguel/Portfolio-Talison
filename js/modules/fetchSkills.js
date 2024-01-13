export async function getData(data) {
    const ul = document.querySelector('.competencias-container-lista')
    const dataJson = await fetch(data).then(response => response.json())  
                                
    dataJson.skills.forEach(skill => {
        const item = `
            <li data-aos="zoom-in-up" class="competencias-container-lista-item">
                <object class="icon" type="image/svg+xml" data=${skill.url} width="64" height="64">
                    <fallback>
                        ${skill.alt}
                    </fallback>
                </object>
                <h3>${skill.name}</h3>
            </li>
        `
        ul.insertAdjacentHTML('beforeend', item);
    });

    const lastObjectElement = ul.lastElementChild.querySelector('.icon');
    const objectElement = [...ul.querySelectorAll('.icon')];
    lastObjectElement.addEventListener('load', () => {
        objectElement.forEach(item => {
            const svg = item.contentDocument.querySelector('svg')
            const elementoPai = item.parentElement;
            svg.style.transition = 'fill .3s ease-in'
            svg.style.cursor = 'pointer'
            
            elementoPai.addEventListener('mouseover', () => {svg.style.fill = 'white'});
            elementoPai.addEventListener('mouseout', () => {svg.style.fill = '#00b8e4'});

        })
    });
    
}
