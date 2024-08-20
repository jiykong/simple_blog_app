import * as React from 'react';
import Post from './Post/Post';

/*
## Blog Component that will contain the primary blog
*/
export default function Blog() {
    const blogPosts = [
        {
            title: "Confusing Status of SWE Job Market",
            body: `
            I had a conversation recently with a buddy of mine who was laid off by WeWork a couple of years ago and he gave me a frightening assessment of the job market. 
            What was once a quick phase of study leetcode + system design is now series of disappointment and dispair.
            
            In his own words, "I had to live, breathe, and dream leetcode for 6 months before I finally landed an offer." 
            
            The offer wasn't even a good one either considering his ability and work ethic. So it was shocking when I heard what he opted to take the job without any intent to look for another.

            On the flip side, I've heard different stories from other friends that their department is planning to boost hiring.
            On the other flip side you get news like CISCO laying people off.

            It is a very confusing time...

            I've come to the conclusion however that this is a matter of survival of the fittest.

            For far too long people, including myself, have gotten by simply doing our job without really keeping our tools sharpened.

            As I wrote in my previous post, its not easy going back to learning different languages and imagine trying to upgrade them
            to industry an proficient level...
            `,
            author: "Koreanfather",
            imgUrl: "",
            divider: true
        },
        {
            title: "Thoughts on Re-Learning Langauges",
            body: `
            After coding soley in python/typescript/js for the last 4 years, I've decided to do a refresher on some old languages that I used to consider myself proficent.
            Although I always knew that re-learning a language is a difficult task, I assumed that this would be akin to re-learning how to ride a bike.
            Turns out this is not the case.
            
            Coding in a specific type of language will develop habits both good and bad. These habits also become ingrained not just mentally but physically. 
            
                The habit of making sure that there is a ; at the end of each line.

                The fact that code must be written 
            
                List<int> variable_name = new List<int>();
                Instead of 
                variable_name = []
                
                and the list goes on and on.

            A great way to compare this journey is how English/Korean speakers have problem learning each other's language due to the difference in grammatical structure.

            Korean is Subject -> Object -> Verb language 
                Example: I The Script Code.
            English is Subject -> Verb -> Object language 
                Example: I Code The Script.

            I still remember when I was first dating my wife. My wife would constantly complain, "What is the object of your sentence?"  
            I would respond, "I'm getting to it."

            This is the same issue when trying to learn/re-learn languages but this also is a challenge of how to maintain work/life/study balance.

            While I would love to continue learning new topics and maintain the old, this requires time that life/work sometimes will prevent.
                On one hand you want to rest your brain after work, but your wife/gf will want to spend time with you.
                On one hand you want to study but you have a deliverable due in 2 weeks.
                On one hand you want to go on vacation but you're lagging behind the industry standard.

            Today is a great example of this as my wife wanted me to go out with the family to the pool and I told her no because I wanted stay home to study.
            My daughter however came to me and begged me to come with them and I couldn't reject her.
            What was originally supposed to be a 2 hour stay, turned into 4, which exhausted me and forced me to make a choice.
                1. Do I take a nap?
                2. Do I study?


            From this I was reminded of what my old mentor told me when I used to work in finance.
            "You're young and you will soon have a family. As the head of that family, understand that your life is not your own and you will need to 
            make sacrifices you won't enjoy."

            I'm realizing that this is a sacrifice I will have to make more frequently.
            `,
            author: "Koreanfather",
            imgUrl: "",
            divider: true
        },
        {
        title: "Hello World! First Blog Post",
        body: `Obligatory first blog post. The
        goal of the blog will be to act more as
        a diary and a playground to test out 
        some ideas in regards software. 
        Although as of this moment it is a very basic react application, 
        I will be enhancing it further down the line with color styling along with other enhancment to make it a true webapp.
        `,
        author: "Koreanfather",
        imgUrl: "",
        divider: false
        }
    ];

    return (
        <div>
            {blogPosts.map((post, index) => (
                <Post key={index} index={index} post={post} />
            ))}
        </div>
    );
}