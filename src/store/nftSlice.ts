import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NFTDataType {
  name: string;
  description: string;
  image: string;
}

interface NFTState {
  nfts: NFTDataType[];
}

const initialState: NFTState = {
  nfts: [],
};

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setNFTs(state, action: PayloadAction<NFTDataType[]>) {
      state.nfts = action.payload;
    },
  },
});

export const { setNFTs } = nftSlice.actions;
export default nftSlice.reducer;
