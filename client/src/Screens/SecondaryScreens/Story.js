//import {Link} from 'react-router-dom';

import {
    StoryContainer,
    Paragraph1,
    Paragraph2,
    Pinned
} from '../../elements/story'


const Story  = () => {          
    return(
        <> 
        <Pinned></Pinned>
<StoryContainer>
    <div className="container">
        <Paragraph1>
            <h1>Our Story</h1>
            <p>
                As cities become more and more populated the price of <br/> 
                accommodation skyrockets at a pace that is hard to keep <br/>
                up with. The dilemma of renting or owning seem to be a <br/>
                never ending dual. You need to save for a decent down <br/> 
                payment, which, even without any expenses, can take <br/>
                years to do. Add monthly rent and living expenses, and<br/>
                it becomes almost impossible to save up the money you need.
            </p>
            <b>
                These facts of modern day living and life is what drove <br/>
                us to create Tiny Homes on Wheels. The concept isn’t <br/>
                itself quite unique –trailer homes have always been <br/> 
                a popular choice for travelers. But Tiny Homes are <br/> 
                not trailer homes. They are actual homes, meant <br/> 
                to fulfill all of your housing needs. The goal was <br/> 
                to create something that is affordable as well as versatile. </b>
        </Paragraph1>


        <Paragraph2>
            <h2>
                Advantages?
            </h2>
            <p>
                Designed to accommodate your busy lifestyle. <br/>
                Small space equals less clean up. 
            </p> 
            <div></div>
            <p>
                If you love to travel, so should your home! <br/>
                Conveniently mounts on your trailer.
            </p>
            <div></div>

            <p> 
                Affordable: Becoming a home owner <br/>
                has never been easier!
            </p>
</Paragraph2>
    </div>
</StoryContainer>
    
    </>
) ;
}
export default Story;