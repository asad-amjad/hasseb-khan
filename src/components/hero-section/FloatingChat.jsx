const FloatingChat = () => {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 z-20">
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16V13M12 16V13M15 16V13M21 12c0 4.5-4.03 8.2-9 8.2S3 16.5 3 12c0-4.5 4.03-8.2 9-8.2S21 7.5 21 12z"></path>
        </svg>
      </div>
    );
  };
  
  export default FloatingChat;