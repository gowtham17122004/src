import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Happyyy Birthdayyy Deenuumaa ❤️,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          
You're my life's biggest desire. 
You are full of love and grace, your soul is the kindest, most caring and most precious thing I've ever had chance to know, and there's no one else I could think to rant to or express my most personal feelings and deepest thoughts too. You accept me with all my weird things and stuff. You are everything, everything one would dream for, something one would die for. Looking at your eyes feels like being in heaven. You're most beautiful girl I've ever met and I'm convinced you're the most beautiful I'll ever meet. You're the very defination of beauty! Talking to you makes all my problems disappear from my mind. You're able to bring my smile back, you're perfect, perfect for me atleast. I love your eyes, your hair, the way you talk, the way yoy smile, the way you laugh... I love everything about YOU. I think about you everyday, I plan out what to say. What I truly appreciate about you is how genuine you are, you has this amazing ability to make everyone around you feel valued and loved. You're not just a princess, you're not just a queen, you are goddess... walking amongst mere mortals, roaming the world with such wonder. You're the most precious person, you healed the heart you didn't break. I love you more, i love you in a way that words cannot describe. I hope yoy know how bad i wish you wanted me in you life the way I want you in mine. I'll treat you like goddess! And I'll give all my love to you and be the happiest person in the World. You're more to me than you know, you are the soul that make me happy everyday everynight everytime, thank you so much!
You're my last risk and greatest love, you made better version of me but if there is one thing i wish you could have seen it would be little things i did for love and for you. I wanna see you achieve everything you told me about 

        </p>
        <p className="text-lg text-pink-600 font-semibold">
          No Man will Ever love you like I do
        </p>
      </motion.div>
    </div>
  );
};

export default Message;