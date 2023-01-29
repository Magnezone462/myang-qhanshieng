import json
import csv

json_list = []
input_file_name = input("yomikomu tiesubui huairu o kaitene > ")

# CSV ファイルの読み込み
with open(input_file_name + '.tsv', 'r', encoding="utf-8") as f:
    for row in csv.DictReader(f, delimiter='\t'):
        json_list.append(row)

# JSON ファイルへの書き込み
with open(input_file_name + '.json', 'w') as f:
    json.dump(json_list, f, indent = 4, ensure_ascii = False)

# JSONファイルのロード
with open(input_file_name + '.json', 'r') as f:
    json_output = json.load(f)
