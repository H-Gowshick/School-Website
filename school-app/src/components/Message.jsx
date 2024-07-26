import React from 'react';

const Message = ({ title, content, author, role }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{content}</p>
    <p className="font-semibold">{author}</p>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

export default Message;