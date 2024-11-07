import React from 'react';

const ProfileSection = () => (
  <section id="profile" className="py-16 bg-white">
    <div className="w-[90%] max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">Profile</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
        <img 
          src="https://plus.unsplash.com/premium_photo-1663099789341-26b599454019?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmclMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGdpcmxzfGVufDB8fDB8fHww"
          alt="Profile" 
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2">Arshita</h3>
          <p className="text-gray-600 mb-4">Software Developer</p>
          <p className="text-gray-700 leading-relaxed">
            Passionate about books and technology. Developed this library management 
            system to help organize and manage book collections efficiently. 
            Committed to creating user-friendly solutions that make a difference.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileSection;