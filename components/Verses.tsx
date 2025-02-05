import React from "react";

const Verses = () => {
  const allVerses = [
    {
      arabic:
        "وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍۢ ",
      english:
        "And we have certainly made the Qur'ān easy for remembrance, so is there anyone who will remember?",
    },
    {
      arabic:
        "إِنَّ هَـٰذَا ٱلْقُرْءَانَ يَهْدِى لِلَّتِى هِىَ أَقْوَمُ وَيُبَشِّرُ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّـٰلِحَـٰتِ أَنَّ لَهُمْ أَجْرًۭا كَبِيرًۭا",
      english:
        "Indeed, this Qur’ān guides to that which is most suitable and gives good tidings to the believers who do righteous deeds that they will have a great reward",
      book: "Al-Isra' ١٧:٩",
    },
    {
      arabic:
        "إِنَّ ٱلَّذِينَ يَتْلُونَ كِتَـٰبَ ٱللَّهِ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَأَنفَقُوا۟ مِمَّا رَزَقْنَـٰهُمْ سِرًّۭا وَعَلَانِيَةًۭ يَرْجُونَ تِجَـٰرَةًۭ لَّن تَبُورَ ",
      english:
        "Indeed, those who recite the Book of Allāh and establish prayer and spend [in His cause] out of what We have provided them, secretly and publicly, [can] expect a transaction [i.e., profit] that will never perish -",
      book: "Fatir ٣٥:٢٩",
    },
    {
      arabic: "إِنَّهُۥ لَقُرْءَانٌ كَرِيمٌ ",
      book: "Al-Waqi'ah ٥٦:٧٧",
      english: "Indeed, it is a noble Qur’ān.",
      mixed: true,
    },
    {
      arabic:
        "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَآ ",
      english:
        "Then do they not reflect upon the Qur’ān, or are there locks upon [their] hearts?",
      book: "Muhammad ٤٧:٢٤",
      mixed: true,
    },
    {
      arabic:
        'عن أبي أمامة رضي الله عنه قال‏: ‏ سمعت رسول الله صلى الله عليه وسلم يقول‏: ‏ ‏ "‏ اقرءوا القرآن فإنه يأتي يوم القيامة شفيعًا لأصحابه‏"‏ ‏(‏‏(‏رواه مسلم‏)‏‏)‏‏.‏',
      english: `Abu Umamah (May Allah be pleased with him) reported: I heard the Messenger of Allah (ﷺ) saying, "Read the Qur'an, for it will come as an intercessor for its reciters on the Day of Resurrection." [Muslim].`,
    },
  ];
  return (
    <div className="flex flex-col items-center  py-16">
      <div className=" md:px-12 xl:px-[80px] 2xl:px-[100px] px-6">
      <h3 className="font-plus text-[#101828] text-[24px] leading-[40.48px] md:text-[32px] md:leading-[45.48px] lg:text-[38px] lg:leading-[50.48px] xl:text-[42px] xl:leading-[55.48px] 2xl:text-[48px] 2xl:leading-[60.48px] mt-4 text-center font-bold">
          Quran Verses
        </h3>
      </div>
      <div className="overflow-visible w-full">
        <div className="overflow-x-auto no-scrollbar md:pl-12 xl:pl-[80px] 2xl:pl-[100px] px-6 mt-16">
          <div className="w-max flex flex-row gap-4">
            {allVerses?.map((item, index) => (
              <div
                className="border border-[#EAECF0] rounded-[12px] p-4 xl:w-[630px] lg:w-[540px] md:w-[510px] w-[450px] h-fit"
                key={index}
              >
                {item?.mixed ? (
                  <span className="flex flex-col ">
                    <p className="xl:text-lg md:text-base text-sm font-medium">{item?.book}</p>
                    <p className="xl:text-lg md:text-base text-sm font-medium mt-6">{item?.arabic}</p>
                    <p className="xl:text-lg md:text-base text-sm font-medium">{item?.english}</p>
                  </span>
                ) : (
                    <span className="flex flex-col">
                    <p className="xl:text-lg md:text-base text-sm font-medium">{item?.arabic}</p>
                    <p className="xl:text-lg md:text-base text-sm font-medium mt-6">{item?.book}</p>
                    <p className="xl:text-lg md:text-base text-sm font-medium">{item?.english}</p>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verses;
