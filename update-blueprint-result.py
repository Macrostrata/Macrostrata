import sys
import json

if len(sys.argv) < 4:
    print('Usage: update-blueprint-result.py <blueprint_name> <blueprint_results_file> <access_token>')
    sys.exit(1)

blueprint_name = sys.argv[1]
blueprint_results_file = sys.argv[2]
access_token = sys.argv[3]

def get_blueprint_results():
    f = open(blueprint_results_file)
    blueprint_results = json.load(f)
    f.close()

    return blueprint_results

def write_results_to_file(blueprint_results):
    f = open(f'./docs/blueprints/{blueprint_name}.json', 'w')
    json.dump(blueprint_results, f)
    f.close()


if __name__ == '__main__':
    blueprint_results = get_blueprint_results()
    write_results_to_file(blueprint_results)
    print('Updated blueprint results')
