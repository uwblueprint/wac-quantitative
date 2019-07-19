#!/usr/bin/env python
import numpy as np
import pandas as pd
import pickle

from scipy.stats import chisquare

def algo(path, cols, data):
    df = pd.read_csv(path, index_col=None)

    for trait in data.keys():
        obs = []
        exp = []

        for category, expected_value in data[trait].items():
            for ind, val in df.loc[:, trait].value_counts().items():
                if str(ind) == str(category):
                    obs.append(val)

            exp.append(expected_value)

        test_statistic, p_value = chisquare(f_obs=obs, f_exp=exp, axis=None)
        print(trait, "test statistic:", test_statistic, "p-value:", p_value)

        if p_value > 0.05:
            print("Chi-square result: green")
        elif p_value > 0.001:
            print("Chi-square result: yellow")
        else:
            print("Chi-square result: red")


def main():
    path = 'csv/example_data.csv'
    cols = 3
    freq = {
        'Gender': {
            '1': 50,
            '2': 50,
        },
        'Ethnicity': {
            'white': 30,
            'black': 30,
            'other': 40,
        },
    }
    algo(path, cols, freq)

if __name__ == "__main__":
    main()
