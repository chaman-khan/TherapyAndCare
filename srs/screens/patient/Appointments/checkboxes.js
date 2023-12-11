import React from "react";
import { View } from "react-native";

const CheckBoxes = () => {
    return(
        <View>
            <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(1)}
            style={styles.checkboxView}>
            <View style={[styles.checkbox]}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked1
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>I don’t want physiotherapy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(2)}
            style={styles.checkboxView}>
            <View style={[styles.checkbox]}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked2
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>I Changed my mood</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(3)}
            style={styles.checkboxView}>
            <View
              style={
                styles.checkbox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked3
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Fee structure is too high</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(4)}
            style={styles.checkboxView}>
            <View
              style={
                styles.checkbox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked4
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Lorem Ipsum is simply dummy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(5)}
            style={styles.checkboxView}>
            <View
              style={
                styles.checkbox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked5
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Lorem Ipsum is simply dummy</Text>
          </TouchableOpacity>
        </View>
    )
}