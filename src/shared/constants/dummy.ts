export const DUMMY_IMAGES = {
  '100': 'https://dummyimage.com/100',
  '200': 'https://dummyimage.com/200',
  '300': 'https://dummyimage.com/300',
  '600': 'https://dummyimage.com/600',
};

export const getDummyImage = (size: number) => {
  return `https://dummyimage.com/${size}`;
};
