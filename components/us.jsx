import React from "react";

const UsSection = () => {
  const teamMembers = [
    { name: "Saumyadip Das", role: "UI/UX Designer", color: "bg-red-300" ,profile: "saumyadip.jpg",},
    {
      name: "Shubhodeep Mukherjee",
      role: "Developer",
      color: "bg-blue-300",
      profile: "shubho.jpg",
    },
    {
      name: "Atanu Ghosh",
      role: "Developer",
      color: "bg-green-300",
      profile: "atanu.jpg",
    },
    {
      name: "Shivam Prasad Shaw",
      role: "Developer",
      color: "bg-yellow-300",
      profile: "shivam.jpg",
    },
  ];

  return (
    <section className="mt-16 px-4">
      <h2 className="text-4xl font-bold text-white text-center blinking-outline">
        Meet The Team
      </h2>
      <p className="text-gray-400 mt-2 text-center">
        Meet The Minds Behind Kritanj Website!
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`w-40 h-40 rounded-full ${member.color} flex items-center justify-center`}
            >
              {member.profile ? (
                <img
                  className="w-36 h-36 rounded-full object-cover"
                  src={member.profile}
                  alt={member.name}
                />
              ) : (
                <span className="text-white text-3xl font-bold">
                  {member.name[0]}
                </span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsSection;
