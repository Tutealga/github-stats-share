export const getRank = async ({level}) => {
    const ranks = {
    "Diamante": {border:'border-[#70d1f4] shadow-[inset_0_0_70px_0px_rgba(112,209,244,0.25)]', text:'text-[#70d1f4]', borderb: 'border-b-[#70d1f4]'}, 
    "Oro": {border:'border-[#ffd700] shadow-[inset_0_0_70px_0px_rgba(255,215,0,0.25)]', text:'text-[#ffd700]', borderb: 'border-b-[#ffd700]'}, 
    "Bronze": {border:'border-[#cd7f32] shadow-[inset_0_0_70px_0px_rgba(205,127,50,0.25)]', text:'text-[#cd7f32]', borderb: 'border-b-[#cd7f32]'},
    "Plata": {border:'border-[#bec2cb] shadow-[inset_0_0_70px_0px_rgba(190,194,203,0.25)]', text:'text-[#bec2cb]', borderb: 'border-b-[#bec2cb]'},
    "Platino": {border:'border-[#046307] shadow-[inset_0_0_70px_0px_rgba(4,99,7,0.25)]', text:'text-[#046307]', borderb: 'border-b-[#046307]'},
    "Maestro": {border:'border-[#884dA7] shadow-[inset_0_0_70px_0px_rgba(136,77,167,0.25)]', text:'text-[#884dA7]', borderb: 'border-b-[#884dA7]'}
  }
    const ranking = Object.keys(ranks).find((res) => res === level)
  
    return ranks[ranking]
    }