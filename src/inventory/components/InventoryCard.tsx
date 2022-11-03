import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, useTheme } from "@rneui/themed";
import tw from "twrnc";
import { Inventory } from "../interfaces";
import { useNavigation } from "@react-navigation/native";
import { InventoryMainNavProps } from "../../navigator/interfaces";

const InventoryCard = ({ name, id }: Inventory) => {
  const { theme } = useTheme();
  const nav = useNavigation<InventoryMainNavProps>();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate("InventoryScreen", { name, id })}
    >
      <View style={tw`mt-4 w-30`}>
        <View style={tw`bg-[${theme.colors.secondary}] rounded-xl `}>
          <View style={tw`flex flex-col justify-center items-center py-4 `}>
            <Icon name="inventory" size={32} />
            <Text style={tw`font-bold mt-2 text-[${theme.colors.black}]`}>
              {name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InventoryCard;
