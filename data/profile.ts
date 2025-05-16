// hardcoded profile data
// we used type script for type safety and better developer experience

interface ProfileData {
    name: string;
    height: string;
    age: string;
    location: string;

    photos: string[];
    prompts: {
        prompt: string;
        answer: string;
    }[];
}

export const profile: ProfileData = {
    name: "Alex",
    height: "6'2",
    age: "80",
    location: "Kate's basement",

    // nextjs serves static files from the public folder
    photos: [
        "/images/aiimage.jpg",
        "/images/shy.jpg",
        "/images/unemployed.jpg"
    ],

    prompts: [
        {
            prompt: "I'm weirdly attracted to",
            answer: "Kate"
        },
        {
            prompt: "The way to win me over is",
            answer: "Have a big ole forehead "
        },
        {
            prompt: "Dating me is like",
            answer: "Wouldn't you like to know weather boy"
        }
    ]
}

// test function to print profile name and prompts only
export const printProfile = (profile: ProfileData) => {
    console.log(`Name: ${profile.name}`);
    console.log("Prompts:");
    console.log(`- Height: ${profile.height}`);
    console.log(`- Age: ${profile.age}`);
    console.log(`- Location: ${profile.location}`);
    profile.prompts.forEach((prompt) => {
        console.log(`- ${prompt.prompt}: ${prompt.answer}`);
    });
}

