export const Utility = {
  fileListToFileArray: (input: FileList): File[] => {
      let length: Number = input.length, result: File[] = [];
      for(let i = 0; i < length; i++)
          result.push(input.item(i) as File);
      return result;
  }
};