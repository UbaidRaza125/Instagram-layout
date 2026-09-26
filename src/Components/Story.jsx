import React from "react";

const stories = [
  { id: 1, name: "Your Story", image: "/story1.jpg" },
  { id: 2, name: "Sana", image: "/story2.jpg" },
  { id: 3, name: "Aliya", image: "/story3.jpg" },
  { id: 4, name: "Ayesha", image: "/story4.jpg" },
  { id: 5, name: "Zainab", image: "/story5.jpg" },
  { id: 6, name: "Hira", image: "/story6.jpg" },
  { id: 7, name: "Maham", image: "/story7.jpg" },
  { id: 8, name: "Laiba", image: "/story8.jpg" },
  { id: 9, name: "Noor", image: "/story1.jpg" },
  { id: 10, name: "Maria", image: "/story2.jpg" },
  { id: 11, name: "Iqra", image: "/story3.jpg" },
  { id: 12, name: "Amna", image: "/story4.jpg" },
  { id: 13, name: "Fatima", image: "/story5.jpg" },
];

const Story = () => {
  return (
    <div className="w-[600px] mx-auto mt-5 overflow-x-auto story-scroll">
      
      <div className="flex gap-4 min-w-max px-2">

        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center w-16 shrink-0"
          >
            
            {/* Story Circle */}
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
              
              <div className="w-full h-full rounded-full bg-white p-[2px]">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

            </div>

            {/* Name */}
            <p className="text-xs mt-1 truncate w-16 text-center">
              {story.name}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Story;